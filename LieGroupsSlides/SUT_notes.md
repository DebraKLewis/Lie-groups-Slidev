---
marp: true
---

## Notes/comments on $SUT(n,\mathbb{R} )$ example

$\newcommand{\fg}{\mathfrak{g}}
\newcommand{\Ad}{\text{Ad}}
\newcommand{\ad}{\text{ad}}
\newcommand{\sands}{\qquad \text{and}\qquad}
\newcommand{\av}{\mathbf{a}}
\newcommand{\bv}{\mathbf{b}}
\newcommand{\fv}{\mathbf{f}}
\newcommand{\xv}{\mathbf{x}}
\newcommand{\yv}{\mathbf{y}}
\newcommand{\uv}{\mathbf{u}}
\newcommand{\vv}{\mathbf{v}}
\newcommand{\idm}{\mathbb{1}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\Rn}{\mathbb{R}^n}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\half}{{\textstyle {1 \over 2}}}
\newcommand{\dep}[1]{{\textstyle {d \ \over d \epsilon}} \left . #1 \right |_{\epsilon = 0}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$Convenient and relevant features of upper triangular matrices. (Lower triangular are just as nice.):
- The determinant of an upper triangular matrix is the product of the diagonal elements. 
*Unofficial exercise:* Show this, in your head/on scratch paper or tablet using an induction argument and a cofactor expansion for the determinant, using the leftmost column (which has only one nonzero entry).
- The diagonal elements of the product of two upper triangular matrices are the pairwise products of the corresponding diagonal elements:
$$(AB)_{jj} = a_{jj} b_{jj}.$$
${}\quad{}$*Unofficial exercise:* Show this, in your head/on scratch paper or tablet, using 
$$
A \bv_j = b_{1j} \av_1 + \cdots + b_{nj} \av_n = b_{1j} \av_1 + \cdots + b_{jj} \av_j.
$$

---

*Key perspective:* The stuff above the diagonal matters in general, but not in this context. The stuff below the diagonal is just a bunch of zeroes. 

You can identify $SUT(n, \R)$ with $(\R^*)^n \times \R^{n(n-1)/2}$, where $\R^* = \R \backslash\{0\}$, with oddball group operations. 

If $(\xv, \yv)$ and $(\uv, \vv) \in (\R^*)^n \times \R^{n(n-1)/2}$, 
$$
(\xv, \yv)(\uv, \vv) = ((x_1 u_1, \ldots, x_n u_n), \psi(\xv, \yv, \uv, \vv))
$$
for some map $\psi$ that we don't need to know much about here.

The function $\ \widetilde \det:(\R^*)^n \times \R^{n(n-1)/2} \to \R \ {}$ induced by the usual determinant satisfies
$$
\widetilde \det(\xv, \yv) = \Pi_{j = 1}^n x_j.
$$
$~$
I recommend staying in the matrix context; I just want to make the point that you should try to avoid getting distracted by the stuff off the diagonal.

---

When taking a directional derivative of the determinant at an invertible matrix, we can 
- follow the hint that it's convenient to work with the fiber $T_gG$ over $g$ of the tangent bundle $TG$ as the left or right translation of $\fg = T_1 G$, and
- make use of the identity $\ \det (AB) = (\det A)(\det B)$,

by working with a curve through $A$ of the form 
$$
A(\epsilon) = A (\idm + \epsilon \, C), \qquad \text{or} \qquad A(\epsilon) = (\idm + \epsilon \, C) A.
$$
We have
$$
\det A(\epsilon) = (\det A) \det (\idm + \epsilon \, C).
$$
If $A \in  SUT(n, \R)$, and $C \in UT(n, \R)$, the space of upper triangular matrices, then
$$
\det A(\epsilon) = \det (\idm + \epsilon \, C) = \Pi_{j = 1}^n (1 + \epsilon \, c_{jj}),
$$
$$
\Longrightarrow \qquad d_A \det(A C) = \dep{\Pi_{j = 1}^n (1 + \epsilon \, c_{jj})}
= \sum_{j = 1}^n c_{jj}
= \text{tr}\, C.
$$

---

Computing that derivative using the Product Rule:
(There are other equally good&mdash;likely more stylish&mdash;approaches.)
If $f$ and $g$ are differentiable scalar functions, then 
$$
\dep{f(\epsilon) g(\epsilon)} = f'(0) g(0) + f(0) g'(0).
$$
If $f_j, j = 1, \ldots, n$ are all differentiable scalar functions, then
$$
\eqa{\dep{\Pi_{j = 1}^n f_j(\epsilon)} &= \dep{f_1(\epsilon) \Pi_{j = 2}^n f_j(\epsilon)}\\
&= f_1'(0) \Pi_{j = 2}^n f_j(0) + f_1(0) \dep{\Pi_{j = 2}^n f_j(\epsilon)}, \\
\dep{\Pi_{j = 2}^n f_j(\epsilon)} &= f_2'(0) \Pi_{j = 3}^n f_j(0) + f_2(0) \dep{\Pi_{j = 3}^n f_j(\epsilon)},
}$$
and so on. Regrouping terms yields
$$
\dep{\Pi_{j = 1}^n f_j(\epsilon)}  = \sum_{k = 1}^n f_k'(0) \Pi_{j \neq k}^n f_j(0).
$$
For $f_j(\epsilon) = 1 + \epsilon \, c_{jj}, \ {}$ we have $f_j(0) = 1$ and $f_j'(0) = c_{jj}$.

---

### Generalization to $GL(n, F)$

We can bootstrap from this example (and its complex analog) to the calculation of the linearization of the determinant function on $GL(n, F)$, using a matrix factorization, e.g. 
- the LU factorization: $A = L U$ for some lower triangular matrix $L$ with 1's on the diagonal, and upper triangular matrix $U$,
- the QR factorization: $A = QR$ for some orthogonal (resp. unitary) matrix $Q$ and upper triangular matrix $R$, or 
- the Schur decomposition: $A = \tilde Q \tilde R \tilde Q^{-1}$ for some orthogonal (resp. unitary) matrix $\tilde Q$ and upper triangular matrix $\tilde R$. 

*Heads up*: You need to be a little careful about differentiability of the factorization.

You've (tacitly, at any rate) been using the LU factorization at least as long as you've been using Gaussian elimination: The elimination process constructs $U$; $L$ serves as a spreadsheet storing the row operations used in the elimination steps. 
If $A$ is singular, row exchanges are stored in a permutation matrix $P$ such that $PA = LU$. 
