---
marp: true
paginate: true
---

### Recap from Thursday: characters

$\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\fk}{\mathfrak{k}}
\newcommand{\Ad}{\text{Ad}}
\newcommand{\ad}{\text{ad}}
\newcommand{\sands}{\qquad \text{and}\qquad}
\newcommand{\av}{\mathbf{a}}
\newcommand{\bv}{\mathbf{b}}
\newcommand{\fv}{\mathbf{f}}
\newcommand{\pv}{\mathbf{p}}
\newcommand{\vv}{\mathbf{v}}
\newcommand{\xv}{\mathbf{x}}
\newcommand{\yv}{\mathbf{y}}
\newcommand{\idm}{\mathbb{1}}
\newcommand{\N}{\mathbb{N}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\Rn}{\mathbb{R}^n}
\newcommand{\calF}{{\cal F}}
\newcommand{\calX}{{\cal X}}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\lcb}{\left \{}
\newcommand{\rcb}{\right \}}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\smallfrac}[2]{{\textstyle {#1 \over #2}}}
\newcommand{\half}{\smallfrac 1 2}
\newcommand{\dep}[1]{\smallfrac {d \ }{d \epsilon} \left . #1 \right |_{\epsilon = 0}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}
\newcommand{\span}[1]{\text{span} \{ #1 \}}
\newcommand{\sl}{\mathfrak{sl}(2, \C)}$The *character* $χ_V: G \to \C$ of a finite dimensional representation $V$ of $G$ is given by
$$
χ_V(g) := \text{trace} \ ρ_V(g).
%= \textstyle{\sum_j} a_{jj}(g), 
$$
$~$
$χ_V$ is a class function, i.e. a continuous element of 
$$
(L_2(G))^G 
=  \{ f \in L_2(G) : f \circ (L_g \circ R_{g^{-1}}) = f \quad \forall \ g \in G \}.
$$
$~$
- $\ \ {}$The trivial representation $V = \C$ has $\ χ_V = 1$. 
- $\ \ χ_{V⊕W} =χ_V +χ_W$.
- $\ \ χ_{V⊗W} = χ_V \, χ_W$.
- $\ \ χ_{V^*} = \overline{χ_V}$.

---

$V$ irreducible $\quad \Longrightarrow \quad \text{Hom}_G(V, V) \approx \C \quad \Longrightarrow   \quad |\chi_V|_{L_2(G)} = 1$
$~$
$V$ and $W$ irreducible and non-isomorphic $\quad \Longrightarrow \quad 
\text{Hom}_G(V, W) = \{0 \}$
$\Longrightarrow \quad \chi_V$ and $\chi_W$ are orthogonal.
$~$
$V$ completely reducible, with
$$
V \approx \oplus V_k^{\oplus n_k},
$$
where 
- the $V_k$'s are irreducible and pairwise non-isomorphic, and
- $n_k$ denotes the multiplicity of $V_k$

$\Longrightarrow \quad \langle \chi_{V_k}, \chi_V \rangle_{L_2(G)} = n_k.$

---

### Example: characters of $SU(2)$

$$
SU(2) = \lcb A \in \C^{2 \times 2} : A^*A = \idm_{\!2}\ \ \text{and  det} \, A = 1 \rcb =  \phi(S^3),\phantom{X^{\int^\int}}
$$
where $\phi: S^3 \subseteq \C^2 \to SU(2)$ is given by 
$$
\phi(z_1, z_2) := \begin{bmatrix} z_1 & z_2 \\ - \bar z_2 & \bar z_1 \end{bmatrix}. 
$$
$~$
Using spherical coordinates on $S^3$,
$$
\Phi(\theta, \varphi, \psi) := \phi(\cos \theta + i \, \sin \theta \cos \varphi,
\sin \theta  \sin \varphi (\cos \psi + i \, \sin \psi)),\phantom{X_{\int_\int}}
$$
$0 \leq \theta, \varphi < \pi, \psi \in S^1,\ {}$ the Haar measure on $SU(2)$ takes the form
$$
dg = \smallfrac 1{2 \pi^2 } \sin^2 \!\theta \, \sin \varphi \, d \theta \, d \varphi \, d \psi.
$$

---

***Some representations of $SU(2)$***

1. Trivial representation on $\C$
2. Standard representation on $\C^2$, matrix-vector multiplication
3. Left and right representations on continuous functions on $SU(2)$:
$$
(g \cdot f)(h) = f (g^{-1} h)
\sands
(g \cdot f)(h) = f (h g)
$$
4. Restriction of 3. to polynomials on $\C^2$
5. $\quad{}$  " $\qquad{}$   "  $\qquad{}$  " $\qquad{}$   " $\qquad{}$ " $\quad{}$ of degree $\, \leq n, \ n \in \N$
6. Restriction of 3. to the space  $V_n$ of homogeneous polynomials of degree $n$,
$$ 
V_n := \text{span} \lcb m_0, \ldots, m_n \rcb, \qquad \text{where}\qquad m_k(z_1, z_2) := z_1^k z_2 ^{n - k}.
$$
$~$
Representations 3. and 4. are infinite dimensional.

---

We now compute the character of $V_n, n \in \N$, and see that $V_n$ is irreducible.
$~$
$\Phi(\theta, \varphi, \psi)$ has eigenvalues $e^{i \, \theta}$ and $e^{- i \, \theta}, \ {}$ and hence is congugate to 
$$
\gamma(\theta) := \Phi(\theta, 0, 0) = \begin{bmatrix} e^{i \, \theta} & 0 \\ 0 &  e^{-i \, \theta} \end{bmatrix}. 
$$
The action of $\gamma(\theta)$ on 
$$m_k(z_1, z_2) = z_1^k z_2^{n - k}$$
is
$$\eqa{
(\gamma(\theta) \cdot m_k)(z_1, z_2) &= m_k(\gamma(\theta)^{-1} z_1, \gamma(\theta)^{-1} z_2)\phantom{X^{\int^\int}} \\
&= \lp e^{-i \, \theta} z_1 \rp^k \lp e^{i \, \theta} z_2 \rp^{n - k} \\
&= e^{i (n - 2 k) \theta} (z_1, z_2).
}
$$

---

$\Longrightarrow \quad m_k$ is an eigenvector of $\rho(\gamma(\theta))$ with eigenvalue $e^{i (n - 2 k) \theta}$.

Since $\{ m_0, \ldots, m_n \}$ is a basis of $V_n$, 
$$\eqa{
\chi_{V_n}(\gamma(\theta)) &= \sum_{k = 0}^n e^{i (n - 2 k) \theta}\\
&= \frac {\sin ((n + 1) \theta)}{\sin \theta}.
}
$$
$~$
The representations $V_j$ and $V_n$ are non-isomorphic if $j \neq n$. 

Let's check directly that their characters are orthonormal.
$$\eqa{
\int_{SU(2)} \langle \chi_{V_j}, \chi_{V_n} \rangle d g &= 
\smallfrac 1{2 \pi^2} \int_0^{2 \pi} \int_0^\pi \int_0^\pi \sin ((j + 1) \theta)}{\sin ((n + 1) \theta) \, \sin \varphi \, d \theta \, d \varphi \, d \psi.
}
$$

---

Regrouping the integrals yields
$$
\smallfrac 1 {2 \pi^2} \lp \int_0^{2 \pi} d \psi \rp \lp \int_0^\pi \sin \varphi \, d \varphi \rp 
\lp \int_0^\pi \sin ((j + 1) \theta)\sin ((n + 1) \theta) \, d \theta \rp. 
$$
The identities 
$$
\int_0^\pi \sin \varphi \, d \varphi = 2 
$$
and
$$
\int_0^\pi \sin ((j + 1) \theta) \sin ((n + 1) \theta) \, d \theta  = 
\lcb \begin{align} \smallfrac \pi 2 & \qquad j = n \\
0 & \qquad j \neq n \end{align} \right . 
$$
$~$
$\displaystyle \Longrightarrow \qquad \qquad \qquad \qquad 
\int_{SU(2)} \langle \chi_{V_j}, \chi_{V_n} \rangle d g = \delta_{jn}.$

---

$SU(2)$ is compact, so all representations of $SU(2)$ are completely reducible. 
$~$
The orthogonality relations for matrix coefficients imply that a complex representation $V$ 
of a compact group is irreducible $\quad \Longleftrightarrow$
$$
\int_G \langle \chi_{V}, \chi_{V} \rangle d g = 1,
$$
so $V_n$ is irreducible for all $n \in \N$.
$~$
$~$
$~$
$~$
$~$
$~$

---

## Irreducible representations of $\mathfrak{sl}(2, \mathbb{C})$

***Claim:*** Complex representations of 
$$\sl = \{ A \in \C^{2 \times 2} : \text{trace}\ A = 0 \}
$$ 
correspond to complex representations of $\mathfrak{su}(2)$.

*Verify:* $\sl$ is the complexification of the real Lie algebra 
$$
\mathfrak{su}(2) = \{ A \in \fg : A + A^* = 0 \},
$$ 
since $\ A \in \fg \quad \Longrightarrow$
$$
A - A^* \in \mathfrak{su}(2)
\sands
i (A + A^*) = (i A) - (i A)^* \in \mathfrak{su}(2) 
$$
$\Longrightarrow$
$$
A = \half \lp (A - A^*) - i^2 (A + A^*) \rp 
\in \mathfrak{su}(2) + i \, \mathfrak{su}(2).
$$

---

$SU(2)$ connected $\quad \Longrightarrow \quad \mathfrak{su}(2)$-modules correspond to $SU(2)$-representations.

$SU(2)$ compact $\quad \Longrightarrow \quad {}$ $SU(2)$-representations are completely reducible.
$~$
Thus every $\sl$-module is completely reducible, and can be expressed as a direct sum of irreducible representations.
$~$

We'll use the basis $\{e, f, h \}$ of $\fg = \sl$, where
$$
e = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}, \qquad 
f = \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix}, \qquad
h = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}, 
$$
with
$$
[e,f] = h, \qquad [h,e] = 2e, \sands [h,f] = −2f.
$$

---

*Side remark:* The usual basis for $\ \mathfrak{su}(2)\ {}$ is
$$
\{i \, \sigma_1, i \, \sigma_2, i \, \sigma_3 \}
\qquad \text{for} \qquad \sigma_1 = e + f, \quad \sigma_2 = i (f - e), \quad \sigma_3 = h. \phantom{X_{\int_\int}}
$$


### Weights of $\fg$-modules

Given a $\fg$-module $V$, let $\Lambda_V$ denote the set of eigenvalues of $\rho(h)$.

***Some traditional jargon:*** $\ {}$ Elements of $\Lambda_V$ are called *weights* of $V$. 

A *highest weight of* $V$ is a weight $\tilde λ$ satisfying
$$\text{re} \, \tilde λ = \textstyle{\max_{λ \in \Lambda_V}} \ \text{re} \, λ. 
$$ 

Given a weight $λ$ of $V$, let $V[λ] ⊂ V$ denote the eigenspace of $λ$.

A vector in $V[λ]$ is called a *vector of weight* $λ$. 
If $\lambda$ is a highest weight, then vectors in $V[λ]$ are *highest weight vectors*.
$~$

---

***Very important example:*** $\ V = (\fg, \ad)$ 

$\ad_h$ has eigenvalues $-2, 0, 2$, with associated eigenspaces
$$\eqa{
\fg[-2] &= \span f,\phantom{X_{\int_\int}} \\
\fg[0] &= \span h, \phantom{X_{\int_\int}}\\
\fg[2] &= \span e.\phantom{X_{\int_\int}}
}
$$

$\Lambda_{(\fg, \ad)} = \{-2, 0, 2 \}, \ {}$ the highest weight is $2$, and the highest weight vectors are rescalings of $e$. 

If $v$ is a vector of weight $λ \ {}$ of a $\fg$-module $V, \ {}$ then
$$\eqa{
(he) \cdot v &= ([h, e] + e h) \cdot v \\
&= 2e \cdot v + e \cdot (λv)\\
&= (λ + 2)e \cdot v
}$$

---

and
$$\eqa{
(hf) \cdot v &= ([h, f] + f h) \cdot v \\
&= - 2f \cdot v + f \cdot (λv)\\
&= (λ - 2)f  \cdot v
}$$
$\Longrightarrow$
$$
e \cdot V[λ] ⊂ V [λ + 2] 
\sands
f \cdot V [λ] ⊂ V [λ − 2].
$$

$~$
Let $v ∈ V[λ]$ be a highest weight vector, and define
$$
v^k : = \frac {f^k}{k!} \cdot v \qquad \quad k≥0.
$$
$~$
$~$
$~$
$~$
$~$

---

***Claim:***
- $f \cdot v^k = (k + 1)v^{k+1}$
- $h \cdot v^k =(λ−2k)v^k$
- $e \cdot v = 0, \ {}$ and 
$$
e \cdot v^k =(λ−k+1)v^{k−1} \qquad \quad \forall \ k >0.
$$

*Verify:*  The first assertion follows immediately from the definition of $v^k$.

The second and third assertions follow from the calculations on the previous slide by induction:
$$
f \cdot V [λ] ⊂ V [λ − 2] \quad \Longrightarrow \quad h \cdot v^1 = (λ − 2) v^1.
$$ 

If 
$$h \cdot v^j =(λ−2j)v^j, j = 1, \ldots, k, \ {}
$$

---

then
$$\eqa{
h \cdot v^{k + 1} &= \smallfrac 1 {k + 1} (hf) \cdot v^k \\
&= \frac {(λ - 2 k) - 2}{k + 1} f\cdot v^k \\
&= (λ - 2 (k + 1)) v^{k + 1}.
}
$$

$e \cdot v = 0$, and hence 
$$ 
e \cdot v^1 = (ef) \cdot v = ([e,f]+fe) \cdot v = h \cdot v=λv.
$$
In-class exercise: 
$$e \cdot v^j =(λ−j+1)v^{j−1} \qquad j = 1, \ldots, k \qquad \Longrightarrow$$
$$
e \cdot v^{k+1} = \cdots = (λ−k)v^k
%1 efvk = 1 (hvk +fevk)= 1 􏰞(λ−2k)vk +(λ−k+1)fvk−1􏰟 k+1 k+1 k+1
%= 1 (λ−2k+(λ−k+1)k)vk =(λ−k)vk. k+1
$$

---

### Constructing irreducible $\fg$-modules with highest weight $n \in \N$

We can use these relationships to construct a family of irreducible $\fg$-modules. 
$~$
Given $n \in \N$, let $V_n$ denote the vector space with basis $\{ v^0, v^1, \ldots, v^n \}$, and define an action of $\fg$ on $V$ by
$$\eqa{
h \cdot v^k & =(n−2k) v^k \\
f \cdot v^k &=(k+1)v^{k+1} \qquad 0 \leq k<n \\ 
f \cdot v^n &=0 = e \cdot v^0\\
e \cdot v^k &= (n+1−k)v^{k−1} \qquad 0 < k \leq n.
}
$$
$~$
This action makes $V_n$ an irreducible $\fg$-module with highest weight $n$.
$~$
$~$

---

We can construct an infinite-dimensional $\fg$-module with basis $\{ v^0, v^1, \ldots \}$.

See, e.g., Kirillov Theorem 4.59 for the details of the proof.
$~$
$V_k$ and $V_n$ are non-isomorphic if $k \neq n$.
$~$
Every finite-dimensional irreducible $\fg$-module is isomorphic to $V_n$ for some $n$.
$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$

---

***Claim:*** If $V$ is a finite-dimensional $\fg$-module, then
$$
V= \oplus_{λ \in \Lambda_V} V[λ] .
$$
This decomposition is called the *weight decomposition of* $V$.
$~$
*Verify:* $\fg$-modules are completely reducible, so we only need to consider the irreducible submodules.

Assume that $V$ is an irreducible $\fg$-module.
$$
λ_1 \neq λ_2 \qquad \Longrightarrow \qquad V[λ_1] \cap V[λ_2] = \{0\},
$$
so the sum of all of the eigenspaces is a direct sum. 
$~$
The actions of $e, f,$ and $h$ all map eigenvectors to eigenvectors, so $\,\oplus_{λ \in \Lambda_V} V[λ]\ {}$ is a submodule of $V$. 

---

Irreducibility of $V \ \Longrightarrow$
$$ V = \oplus_{λ \in \Lambda_V} V[λ],$$
since at least one $V[\lambda]$ is nontrivial if $V$ is nontrivial. 

$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$
$~$

