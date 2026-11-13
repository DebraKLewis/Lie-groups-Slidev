### Characters

The *character* $χ_V: G \to \C$ of a finite dimensional representation $V$ of $G$ is given by
$$
χ_V(g) := \text{trace} \ ρ_V(g).
$$

$χ_V$ is a *class function*, i.e. a continuous element of 
$$
(L_2(G))^G 
=  \{ f \in L_2(G) : \underbrace{f \circ (L_g \circ R_{g^{-1}}) = f}_{\Longleftrightarrow \quad  f \circ L_g = f \circ R_g} \quad \forall \ g \in G \}.
$$
<Spacer size = "1px"/>

- $\ \ {}$The trivial representation $V = \C$ has $\ χ_V = 1$.

- $\ \ χ_{V⊕W} =χ_V +χ_W$.

- $\ \ χ_{V⊗W} = χ_V \, χ_W$.

- $\ \ χ_{V^*} = \overline{χ_V}$.

---

#### Properties of characters relevant to (ir)reducibility

<Spacer size = "15px"/>

- $V$ irreducible $\quad \Longrightarrow \quad \text{Hom}_G(V, V) \approx \C \quad \Longrightarrow   \quad |\chi_V|_{L_2(G)} = 1$.
<Spacer size = "5px"/>

- $V$ and $W$ irreducible and non-isomorphic 

$\qquad \Longrightarrow \quad \text{Hom}_G(V, W) = \{0 \}$ 

$\qquad \Longrightarrow \quad \chi_V$ and $\chi_W$ are orthogonal.
<Spacer size = "5px"/>

- If there are irreducible and pairwise non-isomorphic $V_k$'s such that
$$
V \approx \oplus V_k^{\oplus n_k},
$$
$\quad {}$ then
$$
\langle \chi_{V_k}, \chi_V \rangle_{L_2(G)} = n_k.
$$ 

$\quad n_k$ is the *multiplicity* of $V_k$.

<!--
---

5.3 Lemma. Let $V=\bigoplus_k V_k, V^{\prime}=\bigoplus_k V_k^{\prime}$ be canonical decompositions of two representations $V$ and $V^{\prime}$. Then, any $G$-invariant homomorphism $\phi: V^{\prime} \rightarrow V$ maps $V_k^{\prime}$ to $V_k$.

Note that, for any completely reducible $V$ and $V^{\prime}$, we can arrange the decompositions to be labelled by the same indexes, adding zero blocks if some $W_k$ is not present in the decomposition. Obviously, $\phi$ will be zero on those. We are not assuming uniqueness of the decompositions; rather, this will follow from the Lemma.

Proof. We consider the "block decomposition" of $\phi$ with respect to the direct sum decompositions of $V$ and $V^{\prime}$. Specifically, restricting $\phi$ to the summand $V_l^{\prime}$ and projecting to $V_k$ leads to the "block" $\phi_{k l}: V_l^{\prime} \rightarrow V_k$, which is a linear $G$-map. Consider now an off-diagonal block $\phi_{k l}$, $k \neq l$. If we decompose $V_k$ and $V_l^{\prime}$ further into copies of irreducibles $W_k$ and $W_l$, the resulting blocks of $\phi_{k l}$ give $G$-linear maps between non-isomorphic irreducibles, and such maps are all null by Corollary 4.2. So $\phi_{k l}=0$ if $k \neq l$, as asserted.
5.4 Theorem. Let $V=\bigoplus V_k$ be a canonical decomposition of $V$.
(i) Every sub-representation of $V$ which is isomorphic to $W_k$ is contained in $V_k$.
(ii) The canonical decomposition is unique, that is, it does not depend on the original decomposition of $V$ into irreducibles.
(iii) The endomorphism algebra $\operatorname{End}^G\left(V_k\right)$ is isomorphic to a matrix algebra $M_{n_k}(\mathbb{C})$, a choice of isomorphism coming from a decomposition of $V_k$ into a direct sum of the irreducible $W_k$.
(iv) $\operatorname{End}^G(V)$ is isomorphic to the direct sum of matrix algebras $\bigoplus_k M_{n_k}(\mathbb{C})$, block-diagonal with respect to the canonical decomposition of $V$.

-->

---

### Weights of $\fg$-modules

Given a $\fg$-module $V$, let $\Lambda_V$ denote the set of eigenvalues of $\rho(h)$.

***Some traditional jargon:*** $\ {}$ Elements of $\Lambda_V$ are called *weights* of $V$. 

A *highest weight of* $V$ is a weight $\tilde λ$ satisfying
$$
\text{re} \, \tilde λ = \textstyle{\max_{λ \in \Lambda_V}} \ \text{re} \, λ. 
$$ 

Given a weight $λ$ of $V$, let $V[λ] ⊂ V$ denote the eigenspace of $λ$.

A vector in $V[λ]$ is called a *vector of weight* $λ$. 
If $\lambda$ is a highest weight, then vectors in $V[λ]$ are *highest weight vectors*.

---
routeAlias: sl2-homogeneous-polynomials
---

#### Example: weights of the $\mathfrak{sl}_2(\mathbb C)$-module of homogeneous polynomials in two variables 

Let $V_n$ denote the space of homogeneous polynomials of degree $
n$ in two complex variables, $z_1$ and $z_2$, and use the monomial basis 
$$
\{ m_0, \ldots, m_n \}, \qquad \text{where} \qquad m_k(z_1, z_2) := z_1^{n-k} z_2^k.
$$
<Spacer size="5px"/>

Complexify the action of $\mathfrak{sl}_2(\mathbb C)$ and use the basis $\{\hsl, \esl, \fsl \}$, where
$$
\hsl := \begin{bmatrix}1&0\\0&-1\end{bmatrix}, \qquad 
\esl := \begin{bmatrix}0&1\\0&0\end{bmatrix},\sands
\fsl := \begin{bmatrix}0&0\\1&0\end{bmatrix}.
$$

The associated infinitesimal (algebra) actions on polynomials are

$$
\rho(\hsl) = z_1 \frac{\partial}{\partial z_1} - z_2 \frac{\partial}{\partial z_2}, \qquad
\rho(\esl) = z_1 \frac{\partial}{\partial z_2}, \sands
\rho(\fsl) = z_2 \frac{\partial}{\partial z_1}.
$$
<Spacer size="5px"/>

$m_k$ is an eigenvector of $\hsl$ with weight $n - 2k$.
<!--
$$
\hsl(m_k)(z_1, z_2)
=\lp (n-k)-k\rp z_1^{n-k} z_2^k
=(n-2k)m_k(z_1, z_2)
$$
$\Longrightarrow \ \ 
-->

---

#### Second slide of weights of the $\mathfrak{sl}_2(\mathbb C)$-module of homogeneous polynomials in two variables 

Each weight $-n, 2 - n, \ldots, n - 2, n$ has multiplicity one. 

$n$ is the highest weight, and $m_0$ is a highest weight vector.
<Spacer size="5px"/>

The actions 
$$
\rho(\esl)(m_k) = k \, m_{k - 1} %x^{n-k}y^k) = x^{n-k+1}y^{k-1},\qquad
\sands
\rho(\fsl)(m_k) = (n - k) m_{k + 1} % (x^{n-k}y^k)=(n-k)x^{n-k-1}y^{k+1}.
$$
of $\esl$ and $\fsl$ on $m_k$ "rachet" $m_k$ to the left or right in the ordered list $\{ m_0, \ldots, m_n \}$.

That "racheting" is ***not*** cyclic! The image of $m_k$ eventually falls off the end of the list and equals $0$.
<Spacer size="5px"/>

$\esl$ "raises" the weight by $2$, while $\fsl$ "lowers" it by $2$. 


---

### Characters of $SU(2)$

$$
SU(2) = \left \{ A \in \C^{2 \times 2} : A^*A = \idm_2\ \ \text{and  det} \, A = 1 \right \} =  \phi(S^3),\phantom{X^{\int^\int}}
$$
where $\phi: S^3 \subseteq \C^2 \to SU(2)$ is given by 
$$
\phi(z_1, z_2) := \begin{bmatrix} z_1 & z_2 \\ - \bar z_2 & \bar z_1 \end{bmatrix}. 
$$
<Spacer size = "5px"/>

Using spherical coordinates on $S^3$, i.e.
$$
\Phi(\theta, \varphi, \psi) := \phi(\cos \theta + i \, \sin \theta \cos \varphi,
\sin \theta  \sin \varphi (\cos \psi + i \, \sin \psi)),\phantom{X_{\int_\int}}
$$
$0 \leq \theta, \varphi < \pi, \psi \in S^1,\ {}$ the [Haar measure](Haar-measure) on $SU(2)$ takes the form
$$
dg = \smallfrac 1{2 \pi^2 } \sin^2 \!\theta \, \sin \varphi \, d \theta \, d \varphi \, d \psi.
$$

*Reminder:* $SU(2)$ is compact, so all representations of $SU(2)$ are completely reducible. 


---

### Some representations of $SU(2)$

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
V_n := \text{span} \left \{ m_0, \ldots, m_n \right \}, \qquad \text{where}\qquad m_k(z_1, z_2) := z_1^k z_2 ^{n - k}.
$$
<Spacer size = "5px"/>

Representations 3. and 4. are infinite dimensional.

---

### The character of $V_n$

We now compute the character of $V_n, n \in \N$, and see that $V_n$ is irreducible.

$\Phi(\theta, \varphi, \psi)$ has eigenvalues $e^{i \, \theta}$ and $e^{- i \, \theta}, \ {}$ and hence is congugate to 
$$
\gamma(\theta) := \Phi(\theta, 0, 0) = \begin{bmatrix} e^{i \, \theta} & 0 \\ 0 &  e^{-i \, \theta} \end{bmatrix}. 
$$
The action of $\gamma(\theta)$ on 
$$m_k(z_1, z_2) = z_1^k z_2^{n - k}$$
is
$$
\eqa{
(\gamma(\theta) \cdot m_k)(z_1, z_2) 
&= m_k(\gamma(\theta)^{-1} z_1, \gamma(\theta)^{-1} z_2)\phantom{X^{\int^\int}} \\
&= \lp e^{-i \, \theta} z_1 \rp^k \lp e^{i \, \theta} z_2 \rp^{n - k} \\
&= e^{i (n - 2 k) \theta} (z_1, z_2).
}
$$

---

#### Second slide of the calculation of the character of $V_n$

$\Longrightarrow \quad m_k$ is an eigenvector of $\rho(\gamma(\theta))$ with eigenvalue $e^{i (n - 2 k) \theta}$.

Since $\{ m_0, \ldots, m_n \}$ is a basis of $V_n$, 
$$
\eqa{
\chi_{V_n}(\gamma(\theta)) &= \sum_{k = 0}^n e^{i (n - 2 k) \theta}\\
&= \frac {\sin ((n + 1) \theta)}{\sin \theta}.
}
$$
<Spacer size="5px"/>

The representations $V_j$ and $V_n$ are non-isomorphic if $j \neq n$. 

The orthogonality relations for matrix coefficients imply that a complex representation $V$ 
of a compact group is irreducible $\quad \Longleftrightarrow$
$$
\int_G \langle \chi_{V}, \chi_{V} \rangle d g = 1.
$$

---

#### Direct calculation that $\ j \neq n \ \ \ \Longrightarrow \ \ {}$ the characters of $V_j$ and $V_n$ are orthonormal

$$
\eqa{
\int_{SU(2)} \langle \chi_{V_j}, &\chi_{V_n} \rangle d g = 
\smallfrac 1{2 \pi^2} \int_0^{2 \pi} \! \int_0^\pi \! \int_0^\pi \sin ((j + 1) \theta)\sin ((n + 1) \theta) \, \sin \varphi \, d \theta \, d \varphi \, d \psi \\
&= \smallfrac 1 {2 \pi^2} \lp \int_0^{2 \pi} d \psi \rp \lp \int_0^\pi \sin \varphi \, d \varphi \rp 
\lp \int_0^\pi \sin ((j + 1) \theta)\sin ((n + 1) \theta) \, d \theta \rp. 
}
$$
The identities $\displaystyle \int_0^\pi \sin \varphi \, d \varphi = 2 \ \ {}$ and 
$$
\int_0^\pi \sin ((j + 1) \theta) \sin ((n + 1) \theta) \, d \theta  = 
\left \{ \begin{align} \smallfrac \pi 2 & \qquad j = n \\
0 & \qquad j \neq n \end{align} \right . 
$$

$\displaystyle \Longrightarrow \qquad \qquad \qquad \qquad 
\int_{SU(2)} \langle \chi_{V_j}, \chi_{V_n} \rangle d g = \delta_{jn}.$
<Spacer size="1px"/>

In particular, $V_n$ is irreducible for all $n \in \N$.

---

### Irreducible representations of $\mathfrak{sl}(2, \C)$

To reduce the notation burden, for the next eight slides, let 
$$
\fg = \mathfrak{sl}(2, \C)= \{ A \in \C^{2 \times 2} : \text{trace}\ A = 0 \}.
$$
<Spacer size="1px"/>

***Claim:*** Complex representations of $\fg$
correspond to complex representations of $\mathfrak{su}(2)$.

*Verify:* $\mathfrak{sl}(2, \C)$ is the complexification of the real Lie algebra 
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

#### Second slide of correspondence between complex representations of $\fg$ and $\mathfrak{su}(2)$

$SU(2)$ connected $\quad \Longrightarrow \quad \mathfrak{su}(2)$-modules correspond to $SU(2)$-representations.

$SU(2)$ compact $\quad \Longrightarrow \quad {}$ $SU(2)$-representations are completely reducible.

Thus every $\mathfrak{sl}(2, \C)$-module is completely reducible, and can be expressed as a direct sum of irreducible representations.

We'll (again) use the basis $\{ \hsl, \esl, \fsl\}$ of $\fg = \ \mathfrak{sl}(2, \C)$, where
$$
\hsl = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}, \qquad
\esl = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}, \sands
\fsl = \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix}, 
$$
with
$$
[\esl, \fsl] = \hsl, \qquad [\hsl,\esl] = 2\, \esl, \sands [\hsl,\fsl] = −2 \, \fsl.
$$
<Spacer size="1px"/>

*Side remark:* Another widely used basis for $\ \mathfrak{su}(2)\ {}$ is
$$
\{i \, \sigma_1, i \, \sigma_2, i \, \sigma_3 \}
\qquad \text{for} \qquad \sigma_1 = \esl + \fsl, \quad \sigma_2 = i (\fsl - \esl), \quad \sigma_3 = \hsl. \phantom{X_{\int_\int}}
$$

---

### Example of calculation of weights of a $\fg$-module: $\ V = (\fg, \ad)$ 

$\ad_{\hsl}$ has eigenvalues $-2, 0, 2$, with associated eigenspaces
$$
\eqa{
\fg[-2] &= \span \fsl, \phantom{X_{\int_\int}} \\
\fg[0] &= \span \hsl, \phantom{X_{\int_\int}} \\
\fg[2] &= \span \esl. \phantom{X_{\int_\int}}
}
$$

$\Lambda_{(\fg, \ad)} = \{-2, 0, 2 \}, \ {}$ the highest weight is $2$, and the highest weight vectors are rescalings of $\esl$. 

If $v$ is a vector of weight $λ \ {}$ of a $\fg$-module $V, \ {}$ then
$$
\eqa{
(\hsl \,\esl) \cdot v &= ([\hsl, \esl] + \esl \hsl) \cdot v \\
&= 2\esl \cdot v + \esl \cdot (λv)\\
&= (λ + 2)\esl \cdot v
}
$$
$\Longrightarrow\quad \esl \cdot V[λ] ⊂ V [λ + 2]$.

---

#### Second slide of calculation of weights of a $\fg$-module: $\ V = (\fg, \ad)$ 
<Spacer size="5px"/>

Analogously,
$$
\eqa{
(\hsl\fsl) \cdot v &= ([\hsl, \fsl] + \fsl \hsl) \cdot v \\
&= - 2\fsl \cdot v + \fsl \cdot (λv)\\
&= (λ - 2)\fsl  \cdot v.
}$$
$\Longrightarrow \quad \fsl \cdot V [λ] ⊂ V [λ − 2]$.

Let $v ∈ V[λ]$ be a highest weight vector, and define
$$
v^k : = \smallfrac {\fsl^k}{k!} \cdot v \qquad \quad k≥0.
$$

***Claim:*** $e \cdot v = 0, \ {}$ 
$$
k >0 \quad \Longrightarrow \quad \esl \cdot v^k =(λ−k+1)v^{k−1} \qquad \quad \forall \ k >0,$$
$$
\fsl \cdot v^k = (k + 1)v^{k+1}, \sands \hsl \cdot v^k =(λ−2k)v^k.
$$

<!--
- $e \cdot v = 0, \ {}$ and $e \cdot v^k =(λ−k+1)v^{k−1} \qquad \quad \forall \ k >0$,
- $f \cdot v^k = (k + 1)v^{k+1}$
- $h \cdot v^k =(λ−2k)v^k$
-->

---

#### Verification of the action of $\hsl$ on $v^k$

The assertion for the action of $\fsl$ follows immediately from the definition of $v^k$.

The assertion for the action of $\hsl$ follows by induction from the calculations on the previous slide:
$$
\fsl \cdot V [λ] ⊂ V [λ − 2] \quad \Longrightarrow \quad \hsl \cdot v^1 = (λ − 2) v^1.
$$ 

If 
$$
\hsl \cdot v^j =(λ−2j)v^j, j = 1, \ldots, k, \ {}
$$

then
$$
\eqa{
\hsl \cdot v^{k + 1} &= \smallfrac 1 {k + 1} (\hsl \fsl) \cdot v^k \phantom{\int_X}\\
&= \frac {(λ - 2 k) - 2}{k + 1} \fsl\cdot v^k \phantom{\int_X}\\
&= (λ - 2 (k + 1)) v^{k + 1}.
}
$$

---

#### Verification of the action of $\esl$ on $v^k$

$e \cdot v = 0 \quad \Longrightarrow$
$$
\eqa{
\esl \cdot v^1 &= (\esl \fsl) \cdot v \\
& = ([\esl,\fsl]+\fsl\esl) \cdot v \\
&= \hsl \cdot v \\ 
& =λ \, v.
} 
$$
<Spacer size="5px"/>

*In-class group calculation:*

$$
\esl \cdot v^{k+1} = \underline{\phantom{blahblah}}
$$
<!--
e \cdot v^j =λ−j+1)v^{j−1} \qquad j = 1, \ldots, k 
$\Longrightarrow$
$$
e \cdot v^{k+1} = \cdots = (λ−k)v^k
%1 efvk = 1 (hvk +fevk)= 1 􏰞(λ−2k)vk +(λ−k+1)fvk−1􏰟 k+1 k+1 k+1
%= 1 (λ−2k+(λ−k+1)k)vk =(λ−k)vk. k+1
$$
-->


---

### Constructing irreducible $\fg$-modules

Let $V_n$ denote a vector space with basis $\{ v^0, v^1, \ldots, v^n \}$, and define an action of $\fg$ on $V$ by
$$
\eqa{
\hsl \cdot v^k &= (n − 2k) v^k \qquad\qquad\, 0 \leq k \leq n \\
\esl \cdot v^k &= (n + 1 − k)v^{k − 1} \qquad 0 < k \leq n \\
\fsl \cdot v^k &= (k + 1)v^{k + 1} \qquad \qquad \! 0 \leq k < n \\ 
\fsl \cdot v^n &= 0 = \esl \cdot v^0.
}
$$

This action makes $V_n$ an irreducible $\fg$-module with highest weight $n$.

$V_k$ and $V_n$ are non-isomorphic if $k \neq n$.
<Spacer size="5px"/>

Every finite-dimensional irreducible $\fg$-module is isomorphic to $V_n$ for some $n$.
<Spacer size="5px"/>

We can construct an infinite-dimensional $\fg$-module with basis $\{ v^0, v^1, \ldots \}. \ \ {}$ (Theorem 4.59 in Kirillov.)

---

### Weight decompositions of $\fg$-modules

***Claim:*** If $V$ is a nontrivial finite-dimensional $\fg$-module, then
$$
V= \oplus_{λ \in \Lambda_V} V[λ] .
$$
This decomposition is called the *weight decomposition of* $V$.
<Spacer size="5px"/>

*Verify:* $\fg$-modules are completely reducible, so we only need to consider the irreducible submodules.

Assume that $V$ is an irreducible $\fg$-module.
$$
λ_1 \neq λ_2 \qquad \Longrightarrow \qquad V[λ_1] \cap V[λ_2] = \{0\},
$$
so the sum of all of the eigenspaces is a direct sum. 

The actions of $\hsl, \esl,$ and $\fsl$ all map eigenvectors to eigenvectors, so $\,\oplus_{λ \in \Lambda_V} V[λ]\ {}$ is a submodule of $V$. 

At least one $V[\lambda]$ is nontrivial if $V$ is nontrivial, so 
irreducibility of $\,V \ \Longrightarrow \ \ 
V = \oplus_{λ \in \Lambda_V} V[λ]$.