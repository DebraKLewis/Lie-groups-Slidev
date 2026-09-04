---
marp: true
paginate: true
---

### Wrap up from last week: $\mathfrak{g}$ semisimple $\ \ \Longrightarrow \ \ \exists \ {}$ compact group with Lie algebra $\mathfrak{g}$
$\newcommand{\fa}{\mathfrak{a}}
\newcommand{\fb}{\mathfrak{b}}
\newcommand{\fc}{\mathfrak{c}}
\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\fk}{\mathfrak{k}}
\newcommand{\fn}{\mathfrak{n}}
\newcommand{\ft}{\mathfrak{t}}
\newcommand{\fz}{\mathfrak{z}}
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
\newcommand{\C}{\mathbb{C}}
\newcommand{\bbE}{\mathbb{E}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\N}{\mathbb{N}}
\newcommand{\Z}{\mathbb{Z}}
\newcommand{\Rn}{\mathbb{R}^n}
\newcommand{\calB}{{\cal B}}
\newcommand{\calF}{{\cal F}}
\newcommand{\calX}{{\cal X}}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\smallfrac}[2]{{\textstyle {#1 \over #2}}}
\newcommand{\half}{\smallfrac 1 2}
\newcommand{\triv}{\{ 0 \}}
\newcommand{\radg}{\text{rad}(\fg)}
\newcommand{\ker}{\text{ker} \, }
\newcommand{\tr}{\text{trace}}
\newcommand{\derg}{\text{Der}(\fg)}
\newcommand{\dep}[1]{\smallfrac {d \ }{d \epsilon} \left . #1 \right |_{\epsilon = 0}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$We showed last week that 
- $\ \ \fg$ semisimple $\quad \Longrightarrow \quad \fg\ {}$ is the Lie algebra of $\ \text{Aut}(\fg)$

- $\ \ \text{Aut}(\fg)\ {}$ is a closed Lie subgroup of $\ GL(\fg)$. 

$~$
Lie's Theorems guarantee existence of a connected Lie group $G$ with algebra $\fg$.

$\Ad(G)\ {}$ is the connected component of $\ \text{Aut}(\fg)\ {}$ containing the identity so it suffices to show that $\Ad(G)$ is compact.
$~$
***Claim:*** $\kappa_\fg$ is invariant w.r.t. inner automorphisms $\ \Ad_g, \ g \in G. \ {}$
$~$

---

$$\eqa{
\Ad_g(\ad_\xi(\eta)) &= \Ad_g([\xi, \eta]) \\
&= [\Ad_g(\xi), \Ad_g(\eta)]) \\
&= \ad_{\Ad_g(\xi)}(\Ad_g(\eta))
}
$$
$\forall \ \xi, \eta \in \fg$, i.e. 
$$
\ad_{\Ad_g(\xi)}\, \Ad_g  = \Ad_g \,\ad_\xi. 
$$

Equivalently, 
$$\ad_{\Ad_g(\xi)}  = \Ad_g \, \ad_\xi \, \Ad_{g^{-1}}, \ {}$$ 
and hence
$$\eqa{
\kappa_\fg(\Ad_g(\xi), \Ad_g(\eta)) &= \tr(\ad_{\Ad_g(\xi)}\, \ad_{\Ad_g(\eta)}) \\
&= \tr(\Ad_g \,\ad_\xi \,\Ad_{g^{-1}} \,\Ad_g \,\ad_\eta\, \Ad_{g^{-1}}) \\
%&= \tr (\ad_\xi \,\ad_\eta) \\
&= \kappa_\fg(\xi, \eta).
}
$$

---

Negative-definiteness of $\ \kappa_\fg \ \Longrightarrow \ - \kappa_\fg\ {}$ is an $\Ad(G)$-invariant inner product on $\fg,\ {}$ so 
$$
\Ad(G) \subseteq O(\fg),
$$
the group of orthogonal transformations of $\fg$. 
$~$

Since $\ \text{Aut}(\fg)\ {}$ is closed in $\ GL(\fg), \ {}$ and $\ \Ad(G) \, {}$ is a  connected component of $\, \text{Aut}(\fg),$ compactness of $\ \Ad(G)\ {}$ follows from that of $\ O(\fg). \ {}$ 
$~$
$~$
$~$
$~$
$~$
$~$

---

*Sidebar:* $O(\fg)$ is compact.

A choice of orthonormal basis for $\fg$ determines an isomorphism of $\ O(\fg)\ {}$ with $\ O(n, \R), \ {}$ where $n = \text{dim} \, \fg$.

$O(n, \R)\ {}$ is the preimage of $\ \idm_{\!n}\ {}$ w.r.t. $\ A \mapsto A^TA, \ {}$  so  $O(n, \R)\ {}$ is closed.

$A \in O(n, \R) \ {}$ satisfies 
$$\eqa{|A|^2 &= \textstyle{\sum_{j, k = 1}^\ell } a_{jk}^2 \\
&= \tr{A^T A} \\
&= \tr(\idm_{\!n}) \\
&= n,
}
$$
where $|A|$ is the usual norm on $\ gl(n, \R) \approx \R^{n \times n}$, so $\ O(n, \R)\ {}$ is bounded, 
$\Longrightarrow \ O(n, \R)\ {}$ is  compact. 


---

### Generalized Jordan decomposition

Let $\fg$ be a complex semisimple Lie algebra, and $\, \xi \in \fg$.

The generalized eigenspace decomposition of $\fg$ w.r.t. $\ad_\xi$ is
$$
\fg = \oplus_{λ ∈ \Lambda(\xi)} \fg_λ,
$$
where $\ \Lambda(\xi)\ {}$ is the set of eigenvalues of $\ \ad_\xi, \ {}$ and
$$
\setdef {\fg_λ} \eta \fg {(\ad_\xi − λ \, \text{id}_\fg)^n(\eta) = 0} \quad \text{for some}\ n \in \N.
$$
$~$
***Claim***: $\lambda, \mu \in \Lambda(\xi) \ \Longrightarrow$ 
$$
[\fg_λ, \fg_µ] ⊆ \fg_{λ+µ}.
$$

*Verify:*  $\, \ad_\xi \in \derg \quad \Longrightarrow$
$$
(\ad_\xi − (λ + µ) \text{id}_\fg)[\eta, \zeta] = [\ad_\xi(\eta) − λ \, \eta, \zeta] + [\eta,\ad_\xi(\zeta) − µ \, \zeta].
$$

---

Repeated application of $\ \ad_\xi − (λ + µ) \text{id}_\fg\ {}$ yields
$$
(\ad_\xi − (λ + µ) \text{id}_\fg)^n[\eta, \zeta] 
= \sum_{k = 0}^n \begin{pmatrix}n \\ k \end{pmatrix} 
[(\ad_\xi − λ \, \text{id}_\fg)^k \eta, (\ad_\xi − µ\,\text{id}_\fg)^{n - k}\zeta].
$$

$\eta ∈ \fg_λ \ {}$ and $\ \zeta ∈ \fg_µ \ \Longrightarrow$ 
$$
(\ad_\xi − λ − µ)^n[\eta, \zeta] = 0 
\qquad \text{if} \qquad n > \text{dim} \, \fg_λ + \text{dim} \, \fg_µ,
$$
so $\ [\eta, \zeta] \in\fg_{λ+µ}$.
$~$
***Claim***: $\exists \ \xi_s, \xi_n \in \fg\ {}$ such that the semisimple and nilpotent components of the Jordan decomposition of $\,\ad_\xi \, {}$ satisfy
$$
 (\ad_\xi)_s = \ad_{\xi_s} \sands (\ad_\xi)_n = \ad_{\xi_n}.
 $$

*Verify:* Since $\ (\ad_\xi)_s \ {}$ is the diagonalizable component of $\ \ad_\xi$,
$$
(\ad_\xi)_s|_{\fg_λ}= λ \, \text{id}_{\fg_λ} \qquad \forall \ \lambda \in \Lambda(\xi). 
$$

---

Consider $\ \eta ∈ \fg_λ\ {}$ and $\ \zeta ∈ \fg_µ$.

$[\eta, \zeta] ∈ \fg_{λ+µ} \quad \Longrightarrow$
$$\eqa{
(\ad_\xi)_s([\eta, \zeta]) &= (λ + µ) [\eta, \zeta] \\
&= [λ\,\eta, \zeta] + [\eta, µ\,\zeta] \\
&= [(\ad_\xi)_s(\eta), \zeta] + [\eta, (\ad_\xi)_s(\zeta)]
}
$$
Linearity of $\ (\ad_\xi)_s \ \Longrightarrow$ 
$$
(\ad_\xi)_s ∈ \derg = \ad(\fg).
$$
$~$
Semisimplicity of $\fg \ \Longrightarrow \ \derg = \ad(\fg).\ {}$ 
$~$
Let $\xi_s$ be such that $\ ((\ad_\xi)_s = \ad_{\xi_s}$ and set 
$$
\xi_n = \xi - \xi_s.
$$

---

Uniqueness of $\xi_s$ and $\xi_n$ follows from uniqueness of the Jordan decomposition, since
$$
%\xi_s + \xi_n = \xi_s′ + \xi_n′
\ad_{\xi_s} = (\ad_\xi)_s = \ad_{\xi_s'}
\quad \Longrightarrow \quad
\xi_s - \xi_s' \in \ker{\ad} = \fz(\fg),
$$
and semisimplicity of $\ \fg \Longrightarrow \fz(\fg) = \triv.$
$~$
Note that
$$\eqa{
  \ad_\xi(\eta) = 0 \ &\Longrightarrow \ \eta \in \fg_0 \\
 &\Longrightarrow \  (\ad_\xi)_s (\eta) = 0,
}
$$
and hence
$$
(\ad_\xi)_n (\eta) = \ad_{\xi - \xi_s}(\eta) = \ad_\xi(\eta) - (\ad_\xi)_s (\eta) = 0.
$$
$~$
The block structure of $\ad_\xi \ \Longrightarrow \ {}$
$$
\ad_{[\xi_s, \xi_n]} = [\ad_{\xi_s}, \ad_{\xi_n}] = 0, \qquad
\text{and hence} \qquad  [\xi_s, \xi_n] = 0.
$$

---

### Toral subalgebras

A subalgebra $\ft$ of $\fg$ is *toral* if $\ft$ is abelian and all elements of $\ft$ are semisimple. 
$~$
***Example:*** $\fg = sl(n, \C). \ {}$  The subalgebra  $\ \ft\ {}$ of diagonal traceless matrices is toral.
$~$

***Claim***: If $\fg$ is a Lie algebra over an algebraically closed field, any subalgebra $\ft$ of $\fg$ consisting of semisimple elements is abelian.

*Verify:* Let $\widetilde \ad \in \text{Der}(\ft)$ denote the restriction of $\ad$ to $\ft$.

$\xi \in \ft \quad \Longrightarrow \quad \widetilde \ad_\xi$ is diagonalizable.  

Need to show that $\widetilde \ad_\xi$ has no nonzero eigenvalues. 

---

If $\eta$ is an eigenvector of $\widetilde \ad_\xi$, with eigenvalue $\lambda$, 
$$
\widetilde \ad_\eta(\xi) = -  \widetilde \ad_\xi(\eta) = - \lambda \eta \qquad \Longrightarrow \qquad \widetilde \ad_\eta^2(\xi) = 0.
$$
$~$
$\eta$ semisimple $\quad \Longrightarrow \quad \widetilde \ad_\eta$ diagonalizable 
$\Longrightarrow \quad \exists\ {}$ eigenbasis $\{\zeta_1, \cdots, \zeta_k\}$ of $\ft$, with associated eigenvalues $\lambda_1, \ldots, \lambda_k$.

$$
\xi = \sum_j c_j \zeta_j \quad \Longrightarrow \quad 0 = \widetilde \ad_\eta^2(\xi) = \sum_j c_j \lambda_j^2 \zeta_j,
$$
so 
$$c_j \neq 0 \quad \Longrightarrow \quad \lambda_j = 0, \qquad j = 1, \ldots, k,
$$
i.e. $\xi \in \ker \widetilde \ad_\eta$, and hence $\lambda = 0$.


---

### Eigenspace decompositions relative to toral subalgebras $\fh$

Commuting semisimple elements can be diagonalized simultaneously. 
$~$
Given a common eigenvector $\ \xi ∈ \fg\ {}$ for all $\ad_\eta, \ \eta ∈ \ft,\ \exists \ α \in \ft^*\ {}$ such that
$$
\ad_\eta(\xi) = α(\eta) \xi \qquad \forall \ \eta \in \ft,
$$
and associated subspace
$$
\fg_α := \cap_{\eta \in \ft} \text{ker}(\ad_\eta - α(\eta) \text{id}_\fg).
$$
$~$
Eigenspace decomposition of $\fg$ w.r.t. a toral subalgebra $\ft$:
$$
\fg = \oplus_{α∈\ft^*} \fg_α.
$$


---

***Claim***: If $\, \ft ⊆ \fg\ {}$ is a toral subalgebra, the decomposition
$$
\fg = \oplus_{α∈\ft^*} \fg_α \qquad \qquad \text{satisfies}
$$ 
satisfies
1. $[\fg_α, \fg_β] ⊆ \fg_{α+β}$.
2. $\ α + β \neq 0\ \Longrightarrow \  \fg_α\ {}$ and $\ \fg_β\ {}$ are orthogonal w.r.t. the Killing form $\kappa$ of $\fg$.
3. $\kappa\ {}$ induces nondegenerate pairings $\ \fg_α ⊗ \fg_{−α} → \C$.
4. The restriction $\ \kappa|_{\fg_0}\ {}$ is nondegenerate, and hence $\fg_0 = \fz(\ft) \, {}$ is reductive.

$~$
*Verify: 1.*  Let $\xi ∈ \fg_α, \eta ∈ \fg_β, \zeta ∈ \ft. \ {}$  

$$\eqa{
\ad_\zeta([\xi, \eta])
&= [\ad_\zeta(\xi), \eta] + [\xi, \ad_\zeta(\eta)] \\
&= [α(\zeta) \xi, \eta] + [\xi, β(\zeta) \eta]\\
&= (α + β)(\zeta)[\xi, \eta].
}
$$

---

*2.* $\quad α + β \neq 0 \ \Longrightarrow \ \kappa(\fg_α, \fg_β) = 0$.
Invariance of $\kappa \ \Longrightarrow$

$$\eqa{
0 &= \kappa([\zeta, \xi], \eta) + \kappa(\xi, [\zeta, \eta])\\
&= \kappa(α(\zeta)\xi, \eta) + \kappa(\xi, β(\zeta)\eta)\\
&= (α + β)(\zeta) \, \kappa(\xi, \eta).
}
$$
$\ α + β \neq 0 \ \Longrightarrow \ \kappa(\xi, \eta) = 0$.

*3.* Follows from 2. and nondegeneracy of $\kappa$.

*4.*  &nbsp; 3. $\Longrightarrow \ \ \kappa|_{\fg_0}\ {}$ is nondegenerate, and nondegeneracy of a symmetric invariant bilinear form implies reductivity.

$~$
The 'bigger' the toral subalgebra, the finer-grained the decomposition, so...

-----

### Existence of maximal toral subalgebras

***Claim***: $\ \fg$ semisimple and complex $\ \Longrightarrow\ \fg\ {}$ contains nonzero semisimple elements.

*Verify:*  If $\fg$ contains no nonzero semisimple elements, then the Jordan decomposition $\ \Longrightarrow\ {}$ every element of $\fg$ is nilpotent, i.e. $\ \ad_\xi \ {}$ is nilpotent$\quad \forall \ \xi ∈ \fg$.

Engel’s theorem $\ \Longrightarrow\ \fg\ {}$ is nilpotent, and hence solvable, so $\fg$ is not semisimple.
$~$
Existence of nonzero semisimple elements implies that semisimple Lie algebras have nontrivial toral subalgebras.
$~$
A toral subalgebra is *maximal* if it isn't a proper subalgebra of another toral subalgebra.

Every semisimple Lie algebra $\fg$ contains a maximal toral subalgebra.

---

***Claim***: If $\ \ft ⊆ \fg\ {}$ is a maximal toral subalgebra, then $\ft$ is self-centralizing, i.e.
$$\fg_0 = \fz(\ft) = \ft.$$

$~$
*Verify*: $\quad{}$ If $\xi ∈ \fg_0\ {}$ has Jordan decomposition 

$$
\xi = \xi_s + \xi_n, \qquad \text{then} \qquad \xi_s, \xi_n \in \fg_0.
$$
$\xi_s \, {}$ semisimple $\ \Longrightarrow \ \ft ⊕ \text{span}\{\xi_s \}\ {}$ is toral.

Maximality of $\, \ft \ \Longrightarrow \ \xi_s ∈ \ft$.

$\xi_s \in \ft \quad \Longrightarrow \quad \ad_\xi|_{\fg_0} = \ad_{\xi_n}|_{\fg_0}$ is nilpotent. 

Engel's theorem $\ \Longrightarrow \ \fg_0\, {}$ is nilpotent. 

If we consider $\fg$ as a representation of $\fg_0$, the Killing form of $\fg_0$ is the restriction of the Killing form of $\fg$ to $\fg_0$, and is non-degenerate, so $\fg_0$ is reductive.


---

$\fg_0$ nilpotent and reductive $\ \Longrightarrow \ {}$ $\fg_0$ is abelian.

NTS that all elements of $\, \fg_0\, {}$ are semisimple.

Consider $\xi, \eta \in \fg_0. \ {}$ 

$\ad_{\xi_n} \, {}$ and $\, \fg_0\, {}$ abelian $\ \Longrightarrow\  \ad_{\xi_n} \, \ad_\eta\, {}$ is nilpotent:
$$
( \ad_{\xi_n})^k = 0 \quad\Longrightarrow \quad (\ad_{\xi_n} \, \ad_\eta)^k
= (\ad_\eta)^k (\ad_{\xi_n} )^k = 0.
$$
Hence
$$
\kappa(\xi_n, \eta) = \tr(\ad_{\xi_n} \, \ad_\eta) = 0.
$$
$~$
$\kappa|_{\fg_0}\, {}$ nondegenerate implies $\xi_n = 0, \ {}$ so $\, \xi = \xi_s$ is semisimple.
$~$
Since $\fg_0 = \fz(\ft)$ is toral, maximality of $\, \ft \ \Longrightarrow \ \fg_0 = \ft. \ {}$ 
$~$

---

## Cartan subalgebras

A *Cartan subalgebra* is a nilpotent subalgebra $\fh$ of $\fg$ that is self-normalizing, i.e. 

$$
\fh = N_\fg(\fh) =  \{ \xi \in \fg : \ad_\xi(\fh) \subseteq \fh \}.
$$
$~$
We'll restrict our attention to finite-dimensional semisimple Lie algebras over $\C$.

In this context, Cartan subalgebras are the same thing as maximal toral subalgebras.
(I won't prove that here.)
$~$
***Examples***: 
- $\fg = \mathfrak{sl}(n, \C), \ \ft = {}$ traceless diagonal matrices.
- $\fz(\text{span} \{\zeta\}) \subseteq \fg,\ {}$ where $\zeta$ is a semisimple element of $\fg$  with distinct eigenvalues
$~$

---

***Claim*** *without proof here*: All maximal toral subalgebras of a semisimple Lie algebra $\fg$ are conjugate w.r.t. $\ \Ad(\fg), \ {}$ the adjoint group of $\fg$.
$~$

Hence all Cartan subalgebras of $\fg$ have the same dimension, called the *rank* of $\fg$.
$~$
***Example***: $\quad \mathfrak{sl}(n, \C)\ {}$ has rank $n - 1, \ {}$ since the subalgebra of traceless diagonal matrices is a Cartan subalgebra of $\ \mathfrak{sl}(n, \C)$.
$~$
$~$
$~$
$~$
$~$
$~$


---

## Roots and root spaces

A *root* $\alpha$ of a Cartan subalgebra $\fh$ of $\fg$ is a nonzero element of $\, \fh^*\, {}$ with nontrivial *root space* 
$$
\fg_\alpha := \cap_{\zeta \in \fh} \ker \, S_\alpha(\zeta), \qquad \text{where} \qquad S_\alpha(\zeta) := \ad_\zeta -  \alpha(\zeta) \idm_{\!\fg}.
%\setdef{\fg_\alpha} \xi \fg {\ad_\zeta(\xi) = \alpha(\zeta) \, \xi \ \ \forall \ \zeta \in \fh}.
$$
$~$
If $\Phi$ denotes the set of roots of $\fg$ w.r.t. $\fh$, the *root space decomposition of $\fg$ w.r.t. $\fh$* is 
$$
\fg = \fh \oplus \bigoplus_{\alpha \in \Phi} \fg_\alpha.
$$
$~$
The set $\Phi$ of all roots forms the *root system*.
$~$
$~$
$~$
$~$
$~$

---

***Claim:***  
- $\text{span}\, \Phi = \fh^*$ 
- $\alpha \in \Phi \quad \Longrightarrow \quad - \alpha \in \Phi$,

$~$
*Verify:* $\ \ \alpha(\zeta) = 0  \quad \Longrightarrow \quad S_\alpha(\zeta) = \ad_\zeta \quad \Longrightarrow \quad \ad_\zeta(\fg_\alpha) = \{0 \}$.

Since $\fg = \fh \oplus \bigoplus_{\alpha \in \Phi} \fg_\alpha \ {}$ and $\fh$ is abelian, 

$\alpha(\zeta) = 0 \quad \forall \ \alpha \in \Phi \quad \Longrightarrow \quad \ad_\zeta = 0 \quad \Longrightarrow \quad \zeta = 0$.
$~$
Nondegeneracy of $\kappa$ and orthogonality w.r.t. $\kappa$ of $\fg_\alpha$ and $\fg_\beta$ for $\alpha + \beta \neq 0$ imply 
$- \alpha \in \Phi$ if $\alpha \in \Phi$.
$~$
The root space decomposition reveals subalgebras of $\fg$ isomorphic to $\mathfrak{sl}(2, \C)$.

---

Non-degeneracy of $\kappa|_\fh \ \ \Longrightarrow \ \ {}$ we can define $\phantom{|}^\sharp: \Phi \to \fh\ {}$ by
$$
\kappa(\alpha^\sharp, \zeta) = \alpha(\zeta) \qquad \qquad \forall \ \zeta \in \fh,
$$
analogous to our previous use of $\phantom{|}^\sharp$ in the context of symplectic structures.
$~$
***Claim:***

- $\alpha \in \Phi$, $\xi\in \fg_\alpha$, $\eta \in \fg_{-\alpha} \ \ \Longrightarrow$
$$
[\xi, \eta] = \kappa(\xi, \eta) \alpha^\sharp. \phantom{X_{\int_\int}}
$$

- $\ \ \alpha(\alpha^\sharp) \neq 0 \qquad \forall \ \alpha \in \Phi$

- Given $\alpha \in \Phi$ and $\xi \in \fg_\alpha, \ \ \exists \ \ \eta \in \fg_{-\alpha}\ {}$ such that 
$$h_\alpha := [\xi, \eta] = \kappa(\xi, \eta) \alpha^\sharp = \frac 2 {\alpha(\alpha^\sharp)} \alpha^\sharp.
$$ 

---

- $\xi, \eta, \zeta$ determine a three-dimensional simple subalgebra of $\fg$ isomorphic to $\mathfrak{sl}(2, \C)$, with
$$
\xi \mapsto e, \qquad \eta \mapsto f, \sands \zeta \mapsto h.
$$
$~$
*Verify:* Given $\zeta \in \fh$ and $\xi \in \fg_\alpha$, 
$$
\kappa(\zeta, [\xi, \eta] - \kappa(\xi, \eta) \alpha^\sharp) =
\kappa(\underbrace{[\zeta, \xi]}_{\alpha(\zeta)\xi}, \eta) - \kappa(\xi, \eta) \underbrace{\kappa(\zeta,  \alpha^\sharp)}_{\alpha(\zeta)} 
= 0,
$$
so $\fh$ is orthogonal to $[\xi, \eta] - \kappa(\xi, \eta) \alpha^\sharp$.

$$ \eta \in \fg_{-\alpha} \quad \Longrightarrow \quad [\xi, \eta] \in \fg_0 = \fh,\phantom{X^\int_\int}$$ 

so nondegeneracy of $\kappa|_\fh \quad \Longrightarrow \quad [\xi, \eta] - \kappa(\xi, \eta) \alpha^\sharp = 0$.

---

Nondegeneracy of $\kappa$ and orthogonality of root spaces other than $\fg_{-\alpha}$ to $\fg_\alpha$
$\Longrightarrow \quad \exists \ \eta \in \fg_\alpha$ satisfying
$$
\kappa(\xi, \eta) = 1, \qquad \text{and hence} \qquad [\xi, \eta] = \alpha^\sharp.
$$

Assume that $\alpha(\alpha^\sharp) = 0$.

$\xi \in \fg_\alpha$ and $\eta \in \fg_{-\alpha} \quad \Longrightarrow$
$$
\ad_{\alpha^\sharp}(\xi) = 0 = \ad_{\alpha^\sharp}(\eta),
$$
so $\xi, \eta, \alpha^\sharp$ form a solvable Lie algebra. 

Lie's Theorem $\ \ \Longrightarrow \ \ \exists \ {}$ basis of this algebra w.r.t. infinitesimal adjoint actions are all upper triangular.

$$
\ad_{\alpha^\sharp} = \ad_{[\xi, \eta]} = [\ad_\xi, \ad_\eta]
$$
has a strictly upper triangular matrix representation w.r.t. this basis, so $\ad_{\alpha^\sharp}$ is nilpotent. 

---

$\alpha^\sharp \in \fh \ \ \Longrightarrow \ \ \alpha^\sharp$ is both semisimple and nilpotent, and hence equals 0, which contradicts $\alpha \neq 0$.
$~$
Rescaling the $\eta \in \fg_{-\alpha}$ used above, and retaining the name, we can have
$$
h_\alpha := [\xi, \eta] = \frac 2 {\alpha(\alpha^\sharp)} \alpha^\sharp, \qquad \text{with} \qquad \alpha(\zeta)  = 2.
$$ 

Hence $\ad_{h_\alpha}$ has eigenvectors $\xi, \eta, h_\alpha$, with eigenvalues $2, -2, 0$.

These eigenvectors determine a subalgebra of $\fg$ isomorphic to $\mathfrak{sl}(2, \C)$.
$~$
$~$
Let $\mathfrak{sl}(2, \C)_α$ denote the Lie subalgebra constructed above.
$~$
$~$

---

$$
V = \C \, h_\alpha ⊕ \bigoplus_{k \in \Z, k \neq 0} \!\!\fg_{k\, \alpha}
$$
is an irreducible representation of $\mathfrak{sl}(2, \C)_α$, with weight decomposition
$$
V[k] = \left \{ \begin{align} 0 \ \ & \quad k \ \text{odd} \\
\fg_{k \, \alpha} & \quad k \ \text{even} \end{align} \right.
$$
$~$
$V[0] = \text{span}\{ h_\alpha \}$ is 1D, which implies $V$ is irreducible.

(See Kirillov for proof.)
$~$
$~$


---

***Claim:***  
- $\ \ \alpha, \beta \in \Phi \quad \Longrightarrow \quad \beta(h_\alpha) \in \Z$.

- $\ \ W_\alpha: \fh^* \to \fh^*$ given by
$$
W_\alpha(\mu) := \mu - 2 \, \mu(h_\alpha) \alpha
$$
$\qquad{}$ is a reflection, and takes roots to roots.

In particular, $\alpha \in \Phi \quad \Longrightarrow \quad - \alpha = W_\alpha(\alpha) \in \Phi$.

$~$
*Verify:* $\fg$ is a representation of $\mathfrak{sl}(2, \C)_α$.

$$\xi \in \fg_\beta \quad \Longrightarrow \quad \ad_{h_\alpha}(\xi) = \beta({h_\alpha}) \xi,$$
so $\beta({h_\alpha})$ is a weight (AKA eigenvalue) of $\ad_{h_\alpha}$.

---

The weights of finite dimensional $\mathfrak{sl}(2, \C)$-modules are integers.
$~$
Elements of $\fg_β$ have weight $\beta({h_\alpha}) = n$. 

Reminder: In $\mathfrak{sl}(2, \C), \ {}$  
- $f^n$ is an isomorphism between $V[n], \ {}$ the space of vectors of weight $n$, and $V[-n]$. 
- $e^n$ is an isomorphism between $V[-n]$ and $V[n]$. 

Case 1.  $\ \ n > 0.$  
If $\eta \in \mathfrak{sl}(2, \C)_α$ corresponds to $f$, then $\eta^n$ takes nonzero elements of $\fg_\beta$ to nonzero elements of $\fg_{\beta - n \alpha}$.

$\Longrightarrow \ W_\alpha(\beta) = β − nα \in \Phi$.

Case 2.  $\ \ n < 0.$  Use $\xi$, corresponding to $e$, in place of $\eta$.

---

***A few more facts about roots***

(See your preferred text for proofs.)

- $α \in \Phi$ and $s \, \alpha \in \Phi \quad \Longrightarrow \quad s = \pm 1$.

- $α, β \in \Phi$ and  $β \neq ±α \quad \Longrightarrow \quad$ 
$$\bigoplus_{n \in \Z} \fg_{\beta + n \alpha}
$$
is an irreducible representation of $\mathfrak{sl}(2, \C)_α$.

- If $α,β, α+β \in \Phi$, then 
$$[\fg_α,\fg_β]= \fg_{α+β}.$$

$~$
$~$
$~$
$~$

---

### Abstract root systems

If $\bbE$ is a Euclidean space, and $R$ is a finite set of vectors in $\bbE$ satisfying

1. $\text{span}\, R = \bbE$,
2. $\alpha \in R \quad \Longrightarrow \quad s \, \alpha \in R \ \ \Longleftrightarrow \ \ s = \pm 1$,
3. for any $\alpha \in R$, reflection $W_\alpha$ in the hyperplane $\alpha^\perp$ maps $R$ to itself, and
4. for any $\alpha, \beta \in R$, 
$$
n_{\beta \alpha} := 2 \frac {\langle \beta, \alpha \rangle}{\langle \alpha, \alpha \rangle} \in {\mathbb Z},
$$
then $R$ is called an *abstract root system*.
$~$
Root spaces of complex semisimple Lie algebras are abstract root spaces. 

---

---

### Highest weight vectors

We can choose a linear functional $\ell: \fh \to \R$ that partitions the roots into *positive* and *negative* roots:
$$
\Phi = \Phi_+ \cup \Phi_-, \qquad \text{where} \qquad R_+ := \{ \alpha \in \Phi: \ell(\alpha) > 0 \}.
$$
This partition is called an *ordering of the roots*.
$~$
Let $V$ be a $\fg$-module.  An eigenvector $v \in V$ of the action of $\fh$ satisfying
$$
v \in \cap_{\alpha \in \Phi_+} \ker \rho(\alpha)
$$
is called a *highest weight vector of* $V$.
$~$
Every finite-dimensional representation $V$ of a semisimple complex Lie algebra possesses a highest weight vector.
$~$

---

For any semisimple complex Lie algebra $\fg$,
- the subspace $W$ of $V$ generated by the images of a highest weight vector v
E R- is an irreducible under successive applications of root spaces 9/1 for P
subrepresentation;
- an irreducible representation possesses a unique highest weight vector up to rescaling.
a
